from django.shortcuts import render
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import UserRegistrationForm, UserLoginForm
from django.contrib import messages
from django.utils.safestring import mark_safe
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate , login, logout


class BaseView(View):
     template_name = 'PassionPage_Users/Base.html'

     def get(self, request):
          return render(request, self.template_name)
     
     
class HomePageView(View, LoginRequiredMixin):
     template_name = 'PassionPage_Users/Home.html'

     def get(self, request):
          return render(request, self.template_name)
     
     
class LoginPageView(View):
     template_name = 'PassionPage_Users/Login.html'

     def get(self, request):
        form = UserLoginForm()
        return render(request, self.template_name, {'form': form})

     def post(self, request):
        form = UserLoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, mark_safe(f'Hello {username}, You are logged in '))
                return redirect('blogApp:Home_Page')
            else:
                messages.error(request, 'Invalid Username or Password.')
        return render(request, self.template_name, {'form': form})
     
     
class RegisterPageView(View):
     template_name = 'PassionPage_Users/Register.html'

     def get(self, request):
          form = UserRegistrationForm()
          return render(request, self.template_name, {'form': form})

     def post(self, request):
          form = UserRegistrationForm(request.POST)
          if form.is_valid():
               form.save()
               username = form.cleaned_data.get('username')
               messages.success(request, mark_safe(f'Account for {username} was  successfully created!'))
               return redirect('Login_Page')
          return render(request, self.template_name, {'form': form})