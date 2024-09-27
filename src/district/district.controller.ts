import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { AdminGuard } from '.././guards/admin.guard';

@Controller("district")
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @UseGuards(AdminGuard)
  @Post("create")
  async create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @UseGuards(AdminGuard)
  @Get("all")
  async findAll() {
    return this.districtService.findAll();
  }

  @UseGuards(AdminGuard)
  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.districtService.findOne(+id);
  }

  @UseGuards(AdminGuard)
  @Patch("update/:id")
  async update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  async remove(@Param("id") id: string) {
    return this.districtService.remove(+id);
  }
}
