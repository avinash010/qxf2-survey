"""

This is a script to analyze how aware employees are about taking and giving help


There are two behaviors:

a) taking help

b) giving help


Intuition:

If your awareness score for a behavior is

a) more than 100, you think you are doing more of that than other people report

b) less than 100, you are doing more of that behavior than other people report


In general:

a) you want to be in the Goldilocks range of 75-125 for both taking and giving awareness

b) scores below 75 are more harmful than scores above 125 

"""

# import quilt

# import quilt_conf as conf

import sys
from urllib import response
import requests, json
import pandas as pd
from datetime import datetime
from datetime import timedelta


class Employee:

    "Model an employee"

    def __init__(self,firstname,lastname=None):

        "Initializer"

        self.name = firstname + ' ' + lastname if lastname is not None else ''


    def set_giving_awareness(self,own,others):

        "Setup a giving awareness score"

        if others != 0:

            self.giving_awareness = int(own*100/others) 

        else:

            self.giving_awareness = 'N/A'


        #Intuition

        # > 1 --> think they are helping more 

        # < 1 --> not aware enough of how much they help


    def set_taking_awareness(self,own,others):

        "Setup a giving awareness score"

        if others != 0:

            self.taking_awareness = int(own*100/others) 

        else:

            self.taking_awareness = 'N/A'

        #Intuition

        # > 1 --> think they are taking more help than actual

        # < 1 --> not aware enough of how much help they get


    def print_me(self):

        "Print out the details of the user"

        print(self.name[:14], "\t\t", self.giving_awareness, "\t\t", self.taking_awareness)


def run_awareness_analysis(help_survey_api_token, start_date,end_date):

    "Figure out giving and taking help awareness"

    # quilt.install('{}/{}'.format(conf.quilt_repo, conf.package_name), force=True)

    # app = quilt.load('{}/{}'.format(conf.quilt_repo, conf.package_name))
    response_url = 'https://survey-backend.qxf2.com/survey/admin/QElo_filter_response'
    headers = {
            "accept": "application/json; charset=utf-8",
            "User": help_survey_api_token 
            }

    data = {
        "start_date":start_date,
        "end_date":end_date
            }
    employees_url = "https://survey-backend.qxf2.com/survey/admin/QElo_users"
    employees = requests.get(employees_url, headers=headers,)
    responses = requests.post(response_url, data =json.dumps(data), headers=headers,)
  
    responses = pd.DataFrame(responses.json())
    employees = pd.DataFrame(employees.json())

    print('name \t\t giving_awareness \t taking_awareness')

    for index,row in employees.iterrows():

        if row['active_flag'] != 'Y' or row['first_name'] in ['External','Edward','Shrihari','Kavitha']:

            continue

        emp_obj = Employee(row['first_name'],row['last_name'])

        #1. Giving help

        #a. Self

        whom_you_helped_responses = responses[(responses.question_no ==2) & (responses.respondent_id==row['id'])][['respondent_id', 'answer']].groupby(['respondent_id','answer']).size().reset_index(name='counts').values.tolist()

        whom_you_helped_responses = list(filter(lambda emp: emp[1].strip() != 'External',whom_you_helped_responses))

        giving_own = len(whom_you_helped_responses)

        #b. Others

        who_helped_you_responses=responses[(responses.question_no ==1) & (responses.answer==emp_obj.name)][['respondent_id', 'answer']].groupby(['respondent_id','answer']).size().reset_index(name='counts').values.tolist()

        giving_others = len(who_helped_you_responses)


        #2. Taking help

        #a. Self

        who_helped_you_responses=responses[(responses.question_no ==1) & (responses.respondent_id==row['id'])][['respondent_id', 'answer']].groupby(['respondent_id','answer']).size().reset_index(name='counts').values.tolist()

        who_helped_you_responses = list(filter(lambda emp: emp[1].strip() != 'External', who_helped_you_responses))

        taking_own = len(who_helped_you_responses)

        #b. Others

        whom_you_helped_responses = responses[(responses.question_no ==2) & (responses.answer==emp_obj.name)][['respondent_id', 'answer']].groupby(['respondent_id','answer']).size().reset_index(name='counts').values.tolist()

        taking_others = len(whom_you_helped_responses)        

        emp_obj.set_giving_awareness(giving_own,giving_others)

        emp_obj.set_taking_awareness(taking_own,taking_others)

        emp_obj.print_me()



#----START OF SCRIPT

if __name__ == '__main__':

    help_survey_api_token ="None"
    
    if len(sys.argv)<3:

        end_date = datetime.today()
        start_date = (end_date - timedelta(days=365)).strftime('%Y-%m-%d')
        end_date = end_date.strftime('%Y-%m-%d')
        print ("Last year awarness score is calculated: start and end date used:", start_date, end_date)
        print('Use: python {} start_date<YYYY-mm-dd> end_date<YYYY-mm-dd> if score is needed for different time range\nExample usage: {} 2020-12-01 2021-12-01'.format(__file__,__file__))

    else:
        start_date = sys.argv[1].strip()
        end_date = sys.argv[2].strip()

    run_awareness_analysis(help_survey_api_token, start_date,end_date)

    