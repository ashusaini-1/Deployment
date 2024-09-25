import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getLiveChatWidget(res: Response): void;
    getWebsite(res: Response): void;
}
