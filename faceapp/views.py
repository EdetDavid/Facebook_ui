from email.mime import message
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages


# Create your views here.


def index(request):
    return render(request, 'index.html')


def feed(request):
    return render(request, 'feed.html')


def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request, 'Email or Phone number already taken')
                return redirect('/')
            else:
                user = User.objects.create_user(
                    username=username, email=email, password=password)
                user.save()
                return HttpResponse(' <h1 style="color: green"; text-align: center;> Sign Up Success</h1>')

        return redirect('/')

    else:
        return redirect('/')


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('feed')
        else:
            messages.info(request, ' Invalid Credentials !!')
            return redirect('/')
    else:

        return render(request, "index.html")


def logout(request):
    auth.logout(request)
    return redirect('/')
