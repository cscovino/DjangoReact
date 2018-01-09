from django.shortcuts import render
from nameApp.models import Band
from rest_framework.views import APIView
from rest_framework.response import Response
from nameApp.serializers import BandSerializer, BandsSerializer
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
from django.utils import timezone

class band_detail(APIView):
	def get(self, request, pk):
		band = Band.objects.get(pk=pk)
		serializer = BandSerializer(band)
		return Response(serializer.data)

class band_delete(APIView):
	def post(self, request, pk):
		print('POST')
		band = Band.objects.get(pk=pk)
		band.delete()
		return Response({'received data': 'Good'})

class bands(APIView):
	def get(self, request):
		band = Band.objects.all()
		serializer = BandsSerializer(band, many=True)
		return Response(serializer.data)

class newBand(APIView):
	def post(self,request):
		data = request.data
		newband = Band()
		newband.name = data['name']
		newband.bio = data['bio']
		newband.image = data['image']
		newband.date_added = timezone.now()
		newband.save()
		return Response({'received data': 'Good'})


class FrontendAppView(View):
	"""
	Serves the compiled frontend entry point (only works if you have run `yarn
	run build`).
	"""

	def get(self, request):
		try:
			with open(os.path.join(settings.REACT_APP_DIR, 'build', 'index.html')) as f:
				return HttpResponse(f.read())
		except FileNotFoundError:
			logging.exception('Production build of app not found')
			return HttpResponse(
				"""
				This URL is only used when you have built the production
				version of the app. Visit http://localhost:3000/ instead, or
				run `yarn run build` to test the production version.
				""",
				status=501,
			)