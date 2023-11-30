from django.urls import path
from .views import BaseView, HomePageView, LoginPageView, RegisterPageView


app_name = 'PassionPage_Users'

urlpatterns = [
    path('', BaseView.as_view(), name='Base_Page'),
    path('Home/', HomePageView.as_view(), name='Home_Page'),
    path('Login/', LoginPageView.as_view(), name='Login_Page'),
    path('Register/', RegisterPageView.as_view(), name='Register_Page'),
]