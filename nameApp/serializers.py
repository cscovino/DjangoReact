from rest_framework import serializers
from nameApp.models import Band

class BandSerializer(serializers.ModelSerializer):
	class Meta:
		model = Band
		fields = '__all__'

class BandsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Band
		fields = ('name','id')