from django.urls import path
from . import views

urlpatterns = [
    path("",views.home, name="home"),
    path("contact",views.contact, name="contact"),
    path("confirmation",views.confirmation, name="confirmation"),
    path("EmailCollection/",views.EmailCollection, name="EmailCollection"),
    path("privacy",views.privacy, name="privacy"),
    path("terms",views.terms, name="terms"),
]