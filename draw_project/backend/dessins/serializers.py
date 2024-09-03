from rest_framework import serializers
from .models import Dessin

class DessinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dessin
        fields = ['id', 'nom_personnage', 'date_realisation', 'temps_passe', 'materiel_utilise', 'difficulte', 'description', 'image']