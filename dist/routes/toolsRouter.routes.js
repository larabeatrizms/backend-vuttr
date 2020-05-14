"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ToolsRepository_1 = __importDefault(require("../repositories/ToolsRepository"));
var CreateToolService_1 = __importDefault(require("../services/CreateToolService"));
var DeleteToolService_1 = __importDefault(require("../services/DeleteToolService"));
var typeorm_1 = require("typeorm");
var toolsRouter = express_1.Router();
// const toolsRepository = new ToolsRepository();
toolsRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var tag, toolsRepository, tools, filterTools, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                tag = request.query.tag;
                toolsRepository = typeorm_1.getCustomRepository(ToolsRepository_1.default);
                if (!!tag) return [3 /*break*/, 2];
                return [4 /*yield*/, toolsRepository.find()];
            case 1:
                tools = _a.sent();
                return [2 /*return*/, response.json(tools)];
            case 2: return [4 /*yield*/, toolsRepository.findByTags({
                    tag: tag.toString(),
                })];
            case 3:
                filterTools = _a.sent();
                return [2 /*return*/, response.json(filterTools)];
            case 4:
                err_1 = _a.sent();
                return [2 /*return*/, response.status(400).json({ error: err_1.message })];
            case 5: return [2 /*return*/];
        }
    });
}); });
toolsRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, link, description, tags, createTool, tool, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = request.body, title = _a.title, link = _a.link, description = _a.description, tags = _a.tags;
                createTool = new CreateToolService_1.default();
                return [4 /*yield*/, createTool.execute({
                        title: title,
                        link: link,
                        description: description,
                        tags: tags,
                    })];
            case 1:
                tool = _b.sent();
                return [2 /*return*/, response.json(tool)];
            case 2:
                err_2 = _b.sent();
                return [2 /*return*/, response.status(400).json({ error: err_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
toolsRouter.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteTool, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = request.params.id;
                deleteTool = new DeleteToolService_1.default();
                return [4 /*yield*/, deleteTool.execute({ id: id })];
            case 1:
                _a.sent();
                return [2 /*return*/, response.status(204).send()];
            case 2:
                err_3 = _a.sent();
                return [2 /*return*/, response.status(400).json({ error: err_3.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = toolsRouter;
