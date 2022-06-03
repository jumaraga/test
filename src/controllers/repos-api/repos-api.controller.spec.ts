import { Test, TestingModule } from '@nestjs/testing';
import { ReposApiController } from './repos-api.controller';

describe('ReposApiController', () => {
  let controller: ReposApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReposApiController],
    }).compile();

    controller = module.get<ReposApiController>(ReposApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
