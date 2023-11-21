from django.urls import path
from .views import BaseView


app_name = 'PassionPage_Users'

urlpatterns = [
    path('', BaseView.as_view(), name='Base_Page'),
]