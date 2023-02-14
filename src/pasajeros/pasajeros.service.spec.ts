import { Test, TestingModule } from '@nestjs/testing';
import { PasajeroService } from './pasajeros.service';

describe('PasajerosService', () => {
  let service: PasajeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasajeroService],
    }).compile();

    service = module.get<PasajeroService>(PasajeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
