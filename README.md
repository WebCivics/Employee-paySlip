# Employee-paySlip

Employee payslip for a flexible pay cycle

When a user input’s the employee's details: first name, last name, annual salary (natural numbers) and super rate (0% - 12% inclusive), payment start date, the program should generate payslip information with name, pay period, gross income, income tax, net income and superannuation .

The calculation details will be the following:
  1. pay period = per calendar month
  2. gross income = annual salary / 12 months
  3. income tax = based on the tax table provide below
  4. net income = gross income - income tax
  5. super = gross income x super rate

Notes: All calculation results should be rounded to the whole dollar. If >= 50 cents round up to the next dollar increment, otherwise round down.
The following rates for 2017-18 apply from 1 July 2017 (The tax table is from ATO: https://www.ato.gov.au/Rates/Individual-income-tax-rates)

0 - $18,200 Nil

$18,201 - $37,000 19c for each $1 over $18,200

$37,001 - $87,000 $3,572 plus 32.5c for each $1 over $37,000

$87,001 - $180,000 $19,822 plus 37c for each $1 over $87,000

$180,001 and over $54,232 plus 45c for each $1 over $180,000

Example Data :

Example Data Employee annual salary is 60,050, super rate is 9%, how much will this employee be paid for the month of March ?

pay period = Month of March (01 March to 31 March)

gross income = 60,050 / 12 = 5,004.16666667 (round down) = 5,004

income tax = (3,572 + (60,050 - 37,000) x 0.325) / 12 = 921.9375 (round up) = 922

net income = 5,004 - 922 = 4,082

super = 5,004 x 9% = 450.36 (round down) = 450

Input (first name, last name, annual salary, super rate (%), payment start date):

Tushar,Shyoran,60050,9%,01 March – 31 March

Output (name, pay-period, gross-income, income-tax, net-income, super-amount)

Tushar Shyoran,01 March – 31 March,5004,922,4082,450

# How to run code :
- Run "npm install" in the extracted folder

- Run "npm start" in the terminal 

# Testing
- Run "npm test" 
