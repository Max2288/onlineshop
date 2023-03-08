from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .form import ContactForm


# Create your views here.
def index(request):
    print(request)
    print(request.POST.get('email'))
    if request.POST:
        send_mail('subject', 'message', 'settings.EMAIL_HOST_USER', [request.POST.get('email')], fail_silently=False)
    else:
        print('No')
    return render(request, 'index.html')
