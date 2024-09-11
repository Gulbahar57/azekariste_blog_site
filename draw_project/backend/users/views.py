from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import CustomUserCreationForm

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')  # Assurez-vous d'avoir une vue nommée 'home'
    else:
        form = CustomUserCreationForm()
    return render(request, 'users/signup.html', {'form': form})

def users_home(request):
    return render(request, 'users/home.html')