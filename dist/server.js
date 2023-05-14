"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const config_1 = require("./config");
const routes_1 = require("./routes");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        (0, database_1.connectDB)();
        this.configuration();
        this.middlewares();
        this.routes();
    }
    configuration() {
        this.app.set('port', config_1.PORT || 3000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.status(200).json({
                name: 'API REST'
            });
        });
        this.app.use('/api/sales', routes_1.routes.SalesRoute);
        this.app.use('/api/products', routes_1.routes.ProductsRoute);
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server esta corriendo en el puerto ${this.app.get('port')}`);
        });
    }
}
exports.Server = Server;
