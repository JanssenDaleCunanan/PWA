from django.shortcuts import render
from .models import ArticleCard, Magazine
from django.http import HttpResponse
from blog import functions as fn
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
# Create your views here.


def home(request):
    articleCards = ArticleCard.objects.all()
    magazines = Magazine.objects.all()
    print(magazines)
    context = {
        'articleCards': articleCards,
        'magazines': magazines,
    }
    return render(request, "blog/altLanding.html", context)

def contact(request): 
    return render(request,"blog/contact.html")

def confirmation(request):
    
    if request.method == 'POST':
        message = request.POST['message']
        email = request.POST['email']
        name = request.POST['name']
        
        print("name: ", name)
        print("email: ", email)
        print("message: ", message)
        
        full_message = f"From: {name}\nEmail: {email}\nMessage: {message}"
        
        send_mail(
            'Contact Form Submission',
            full_message,
            settings.EMAIL_HOST_USER,
            ['powerfulafrica.mag@gmail.com'],
            fail_silently=False
        )
        
    return render(request,"blog/confirmation.html")


def EmailCollection(request):
   
    try:
        email = request.GET.get('email')
        
        fn.subscribe(email)
        print(email)
        return HttpResponse("Success")
    except:
        return HttpResponse("Error - could not subscribe user.")
    

def privacy(request): 
    return render(request,"blog/privacy.html")

def terms(request): 
    return render(request,"blog/terms.html")