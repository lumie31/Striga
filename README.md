# Striga

This application uses the Striga API to display a users' Bitcoin and Euro account. It also allows users to:

- Deposit Bitcoin via the Lightning Network into their account (https://htlc.me/)
- Convert Bitcoin to Euros and vice-versa (Both Buy & Sell using the rates from https://docs.striga.com/reference/exchange-rates)

A live copy of the project can be viewed here: https://striga-ecru.vercel.app/

## App Features

- Dashboard showing users Bitcoin & Euro account
- Screen for each account, showing it's balance and transaction history
- A swap screen to allow conversions between Bitcoin & Euros

## Documentation and Resources

- Striga Documentation (https://docs.striga.com/)
- Striga Portal (https://portal.striga.com/signup)

## Built With

- Nextjs
- Typescript
- Tailwindcss
- Vercel

## Some challenges faced

- Getting up to speed with the Striga API
- I was unable to make a successful request to the Striga API on the Striga documentation
- Unclear error message from some of the Striga API endpoints
- Using Doppler for managing environment variables posed some challenges

All the above challenges took some time to work around and to find suitable alternatives but it was a great learning experience.
