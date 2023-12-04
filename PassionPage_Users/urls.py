from django.urls import path
from .views import BaseView, HomePageView, LogoutPageView , LoginPageView, RegisterPageView, DetailPostView, CategoryListView
from django.conf import settings
from django.conf.urls.static import static

app_name = 'PassionPage_Users'

urlpatterns = [
    path('', BaseView.as_view(), name='Base_Page'),
    path('Home/', HomePageView.as_view(), name='Home_Page'),
    path('Logout/', LogoutPageView.as_view(), name='Logout_Page'),
    path('Login/', LoginPageView.as_view(), name='Login_Page'),
    path('Register/', RegisterPageView.as_view(), name='Register_Page'),
    path('<slug:S_post>/', DetailPostView.as_view(), name='Single_Post_Page'),
    path('Category/<Category>/', CategoryListView.as_view(), name='Category_Page'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)