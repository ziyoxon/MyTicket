import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ActivateAdminDto } from './dto/activate-admin.dto';
import { DeactivateAdminDto } from './dto/deactivate-admin.dto';
import { CreatorGuard } from '../guards/creator.guard';
import { AdminSelfGuard } from '../guards/admin-self.guard';

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(CreatorGuard)
  @Post("create")
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @UseGuards(CreatorGuard)
  @Get("all")
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(AdminSelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @UseGuards(CreatorGuard)
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @UseGuards(CreatorGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }

  @UseGuards(CreatorGuard)
  @HttpCode(200)
  @Post("activate")
  activateAdmin(@Body() activateAdminDto: ActivateAdminDto) {
    return this.adminService.activateAdmin(activateAdminDto);
  }

  @UseGuards(CreatorGuard)
  @HttpCode(200)
  @Post("deactivate")
  deactivateAdmin(@Body() deactivateAdminDto: DeactivateAdminDto) {
    return this.adminService.activateAdmin(deactivateAdminDto);
  }
}
