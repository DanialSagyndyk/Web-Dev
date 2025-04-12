from django.core.management.base import BaseCommand
from api.models import Company, Vacancy

class Command(BaseCommand):


    def handle(self, *args, **options):
        
        companies = [
            Company(name='Google', description='Tech giant', city='Mountain View', address='1600 Amphitheatre Parkway'),
            Company(name='Microsoft', description='Software company', city='Redmond', address='One Microsoft Way'),
            Company(name='Amazon', description='E-commerce and cloud computing', city='Seattle', address='410 Terry Ave N')
        ]
        
        Company.objects.bulk_create(companies)
        
        vacancies = [
            Vacancy(name='Software Engineer', description='Develop software products', salary=120000, company=companies[0]),
            Vacancy(name='Product Manager', description='Manage product development', salary=130000, company=companies[0]),
            Vacancy(name='Data Scientist', description='Analyze data', salary=110000, company=companies[0]),
            Vacancy(name='Full-Stack Developer', description='Develop web applications', salary=115000, company=companies[1]),
            Vacancy(name='Cloud Architect', description='Design cloud solutions', salary=140000, company=companies[1]),
            Vacancy(name='UX Designer', description='Design user interfaces', salary=95000, company=companies[1]),
            Vacancy(name='DevOps Engineer', description='Manage infrastructure', salary=125000, company=companies[2]),
            Vacancy(name='Machine Learning Engineer', description='Build ML models', salary=135000, company=companies[2]),
            Vacancy(name='Backend Developer', description='Develop server-side applications', salary=105000, company=companies[2]),
            Vacancy(name='Frontend Developer', description='Develop client-side applications', salary=100000, company=companies[2]),
            Vacancy(name='QA Engineer', description='Test software products', salary=90000, company=companies[2])
        ]
        
        Vacancy.objects.bulk_create(vacancies)
        
        self.stdout.write(self.style.SUCCESS('Successfully populated database'))