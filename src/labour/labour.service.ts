import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLabourDto } from './dto/create-labour.dto';
import { UpdateLabourDto } from './dto/update-labour.dto';
import { Labour } from './entities/labour.entity';

@Injectable()
export class LabourService {
  constructor(
    @InjectRepository(Labour)
    private labourRepo: Repository<Labour>,
  ) {}

  create(data: CreateLabourDto) {
    const labour = this.labourRepo.create(data);
    return this.labourRepo.save(labour);
  }

  findAll() {
    return this.labourRepo.find();
  }

  findOne(id: number) {
    return this.labourRepo.findOne({ where: { id } });
  }

  update(id: number, data: UpdateLabourDto) {
    return this.labourRepo.update(id, data);
  }

  delete(id: number) {
    return this.labourRepo.delete(id);
  }
}
