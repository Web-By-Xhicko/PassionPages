from django.shortcuts import render
from django.views import View


class BaseView(View):
     template_name = 'PassionPage_Users/Base.html'

     def get(self, request):
          return render(request, self.template_name)