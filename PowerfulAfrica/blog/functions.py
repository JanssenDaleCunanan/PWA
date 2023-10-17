from mailchimp_marketing import Client
from mailchimp_marketing.api_client import ApiClientError

#SUBSCRIBE TO NEWLETTER
def subscribe(email):
   
    print("email:", email)
    mailchimp = Client()
    mailchimp.set_config({
        "api_key": "3e7121f04e2de721dcbb2a41a5d6d15f-us21",
        "server": "us21",
    })
    
    list_id="7cf63fd9fc"
    
    member_info = {
        "email_address": email,
        "status": "subscribed"
    }

    try:
        response = mailchimp.lists.add_list_member(list_id, member_info)
        print("response: {}".format(response))
    except ApiClientError as error:
        print("An exception occurred: {}".format(error.text))
