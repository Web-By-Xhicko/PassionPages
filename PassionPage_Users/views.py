from django.shortcuts import render
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import UserRegistrationForm, UserLoginForm, NewCommentForm
from django.contrib import messages
from django.utils.safestring import mark_safe
from django.shortcuts import redirect, render
from django.contrib.auth import  login, logout
from django.contrib.auth.forms import AuthenticationForm
from .models import Post, Category
from django.views.generic import ListView, DetailView
from django.db.models import Count
from django.views.generic.edit import FormMixin
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404


class BaseView(View):
     template_name = 'PassionPage_Users/Base.html'
     context_object_name = 'Updated_Post'
     
     def get_queryset(self):
        return Post.Newmanager.annotate(num_comments=Count('Comment')).order_by('-Publish')[:8]

     def get(self, request, *args, **kwargs):
        updated_posts = self.get_queryset()
        context = {
            self.context_object_name: updated_posts,
        }
        return render(request, self.template_name, context)

     
     
class HomePageView(LoginRequiredMixin, ListView):
     template_name = 'PassionPage_Users/Home.html'
     context_object_name = 'Updated_Post'
     
     def get_queryset(self):
        updated_posts = Post.Newmanager.annotate(num_comments=Count('Comment')).order_by('-Publish')[:8]
        return updated_posts

     def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        older_posts = None
        updated_posts = self.get_queryset()

        if len(updated_posts):
            older_posts = Post.Newmanager.annotate(num_comments=Count('Comment')).order_by('Publish')[:8]

        context['Older_Post'] = older_posts
        return context


class LogoutPageView(View):
     template_name = 'PassionPage_Users/Login.html'

     def get(self, request):
           logout(request)
           messages.warning(request,'you have successfully logged out' )
           return redirect('PassionPage_Users:Login_Page') 

     
class LoginPageView(View):
     template_name = 'PassionPage_Users/Login.html'

     def get(self, request):
        form = UserLoginForm()
        return render(request, self.template_name, {'form': form})

     def post(self, request):
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            if user is not None:
                login(request, user)
                messages.success(request, f'Hello {user.username}, You successfully Logged in')
                return redirect('PassionPage_Users:Home_Page')
            else:
                messages.error(request, 'Invalid Username or Password.')
        else:
            messages.error(request, 'The Credentials you entered are incorrect')
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
               return redirect('PassionPage_Users:Login_Page')
          return render(request, self.template_name, {'form': form})
     

class DetailPostView(LoginRequiredMixin ,FormMixin, DetailView):
    model = Post,
    template_name = 'PassionPage_Users/Detail.html'
    form_class = NewCommentForm
    slug_field = 'slug'
    slug_url_kwarg = 'S_post'

    
    def get_queryset(self):
        # Retrieve the queryset for the detail view
        return Post.Objects.all()  


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        S_post = self.get_object()
        comment = S_post.Comment.filter(Status=True)
        context['Comment'] = comment
        if self.request.user.is_authenticated:
            context['user_comment'] = None
            context['comment_form'] = self.get_form()
        else:
            context['user_comment'] = None
            context['comment_form'] = None

        return context

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form()
        if form.is_valid():
            user_comment = form.save(commit=False)
            user_comment.Name = self.request.user.username
            user_comment.Email = self.request.user.email
            user_comment.Post = self.object
            user_comment.save()
            messages.success(request, 'Your Comment was successfully added')
            return HttpResponseRedirect(self.object.get_absolute_url())
        else:
            return self.render_to_response(self.get_context_data(form=form))
        

class CategoryListView(LoginRequiredMixin,  ListView):
    template_name = 'PassionPage_Users/Category.html'
    context_object_name = 'Category_Posts'
    queryset = Post.Objects.filter(Status='published')

    def get_queryset(self):
        category_name = self.kwargs['Category']
        category = get_object_or_404(Category, name=category_name)
        category_posts = self.queryset.filter(Category=category)
        return category_posts

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        category_name = self.kwargs['Category']
        context['Category'] = category_name
        return context