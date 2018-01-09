# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-04 17:07
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('nameApp', '0018_auto_20171204_1144'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='musicband',
            name='bandID',
        ),
        migrations.AlterField(
            model_name='band',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2017, 12, 4, 17, 7, 27, 625315, tzinfo=utc)),
        ),
        migrations.DeleteModel(
            name='MusicBand',
        ),
    ]
