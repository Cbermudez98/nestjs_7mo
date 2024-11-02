import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  // Tecnica AAA
  // ARRANGE
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // ACT
  describe('root', () => {
    it('should return "Hello World!"', () => {
      // ASSERT
      const users = appController.getUser();
      expect(users).toBeDefined();
    });
  });
});
