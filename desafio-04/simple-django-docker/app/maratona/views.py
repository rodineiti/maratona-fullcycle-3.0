from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import MaratonaItem

def maratonaHome(request):
  items = MaratonaItem.objects.all();
  return render(request, 'index.html', { 'items': items })

def addItem(request):
  new_item = MaratonaItem(title = request.POST['title']);
  new_item.save()
  return HttpResponseRedirect("/maratona/")