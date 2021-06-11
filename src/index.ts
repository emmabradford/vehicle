import "reflect-metadata";
import {createConnection} from "typeorm";
import {vehicle} from './entity/vehicle_data';
import {User} from "./entity/User";
import express, { Request, Response } from "express";
var express = require('express');
const app = express();
app.use(express.json())


createConnection().then(async () => {

    app.listen(3000, ()=> console.log('loading vehicle data'))
}).catch(error => console.log(error));
