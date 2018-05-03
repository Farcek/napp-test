import "reflect-metadata";
import { ClassrouterFactory, defaultFilters } from 'classrouter2';
import { PageController } from './controller';
import { NappResponseFilter } from "../napp-application";
const express = require('express');

async function bootstrap() {
    var app = express();

    let f = new NappResponseFilter(() => {
        return {
            aa: 11
        }
    });

    let ins = new ClassrouterFactory({
        app,
        controllerTypes: [PageController],
        responseFilters: [f, ...defaultFilters]
    });

    await ins.initlize();

    app.listen(3000, () => {
        console.log('sysop started. staring port :3000');
    });

}


bootstrap();