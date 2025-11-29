import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabourService } from './labour.service';
import { LabourController } from './labour.controller';
import { Labour } from './entities/labour.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Labour])   // <-- REQUIRED !!
  ],
  controllers: [LabourController],
  providers: [LabourService],
})
export class LabourModule {}
