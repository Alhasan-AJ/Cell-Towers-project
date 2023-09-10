# CellTowerFull-Stack

A full stack application that uses the telecom company's API endpoint to filter and visualize the data. The provided API endpoint from the company contains information on hundreds of cell towers, including their tower id, network operator, technology (2G, 3G, 4G, or 5G), latitude, and longitude. The application
is built to consume the API and visualize the data.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1 and Spring Boot.

It has implementations for both the backend, using Spring Boot, and the frontend, using Angular.

# Backend Application

The backend was implemented using spring boot. It has two endpoints created that retrieve data from an external api:

- The first endpoint, `/towers`, is designed to retrieve all the cell tower data.
- The second endpoint `/query-towers` allows you to retrieve cell tower data based on specific filtering criteria. 

## Running the application 

The backend application could be found in the folder that is called `consumingExternalAPIs`. Therefore, if you clone the project, navigate to the folder and run the `ConsumingExternalAPIsApplication.java` file. Then, navigate to `http://localhost:8080/towers` to retrieve all the cell towers data or navigate to `http://localhost:8080/query-towers` with your specific query parameters to filter the cell tower data.

# Frontend Application

The frontend application was implemented  using the Angular CLI. A service called `CelltowerdataService` was created to retrieve all the cell towers from the backend API.

Three components were generated to preform certain tasks:
- `parent.component` is used to displays both the table view (table component and the chart view(chart component).
- `towerstable.component` is used to display all the cell towers data in a table. This was implemented by using `MatTableDataSource`, imported from Angular Material library.
- `towerschart.component` is used to display the total number of cell towers for each technology (5G, 4G, 3G, 2G). This was implemented by using the chart.js library

The remaining files in the repository (except than the `consumingExternalAPIs` folder) are related to the angular application.

## Running the application

After you clone the project, naviagte to the diretcory where you cloned the project, then in the terminal run `npm install`, followed by `npm start` to start the application. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. 



