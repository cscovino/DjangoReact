from django.conf.urls import include, url
from rest_framework.urlpatterns import format_suffix_patterns
from nameApp.views import *

urlpatterns = [
				url(r'^$', FrontendAppView.as_view(), name='index'),
				url(r'^band/api/all/$', bands.as_view(), name='bands'),
				url(r'^band/api/(?P<pk>[0-9]+)/$', band_detail.as_view(), name='band_detail'),
				url(r'^band/del/(?P<pk>[0-9]+)/$', band_delete.as_view(), name='band_delete'),
				url(r'^band/new/$', newBand.as_view(), name='newBand'),
			  ]

urlpatterns = format_suffix_patterns(urlpatterns)