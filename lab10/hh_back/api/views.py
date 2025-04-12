from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.shortcuts import get_object_or_404

class CompanyListAPIView(APIView):
    def get(self,request):
        companies=Company.objects.all()
        serailizer=CompanySerializer(companies,many=True)
        return Response(serailizer.data)


class CompanyDetailAPIView(APIView):
    def get(self,request,id):
        company=get_object_or_404(Company,id=id)
        serializer=CompanySerializer(company)
        return Response(serializer.data)
    

class CompanyVacanciesAPIView(APIView):
    def get(self,request,id):
        company=get_object_or_404(Company,id=id)
        vacancies=company.vacancies.all()
        serializer=VacancySerializer(vacancies,many=True)
        return Response(serializer.data)
    

class VacancyListAPIView(APIView):
    def get(self,request):
        vacancies=Vacancy.objects.all()
        serializer=VacancySerializer(vacancies,many=True)
        return Response(serializer.data)
    

class VacancyDetailAPIView(APIView):
    def get(self,request,id):
        vacancy=get_object_or_404(Vacancy,id=id)
        serilaizer=VacancySerializer(vacancy)
        return Response(serilaizer.data)
    

class TopTenVacanciesAPIView(APIView):
    def get(self,request):
        vacancies=Vacancy.objects.order_by('-salary')[:10]
        serializer=VacancySerializer(vacancies,many=True)
        return Response(serializer.data)
