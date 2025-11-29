import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { LabourService } from './labour.service';
import { CreateLabourDto } from './dto/create-labour.dto';
import { UpdateLabourDto } from './dto/update-labour.dto';

@Controller('labour')
export class LabourController {
  constructor(private labourService: LabourService) {}

  // CREATE Labour
  @Post('create')
  create(@Body() dto: CreateLabourDto) {
    return this.labourService.create(dto);
  }

  // GET All Labours
  @Get('get-all')
  findAll() {
    return this.labourService.findAll();
  }

  // GET One Labour by ID
  @Get('get/:id')
  findOne(@Param('id') id: number) {
    return this.labourService.findOne(id);
  }

  // UPDATE Labour
  @Put('update/:id')
  update(@Param('id') id: number, @Body() dto: UpdateLabourDto) {
    return this.labourService.update(id, dto);
  }

  // DELETE Labour
  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.labourService.delete(id);
  }
}
