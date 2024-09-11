from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Dessin
from .serializers import DessinSerializer

# Create your views here.

def home(request):
    return HttpResponse('<h1>Coucou Django! </h1>')

class DessinAPIView(APIView):
    def get(self, *args, **kwargs):
        dessins = Dessin.objects.all()
        serializer = DessinSerializer(dessins, many=True)
        return Response(serializer.data)
    