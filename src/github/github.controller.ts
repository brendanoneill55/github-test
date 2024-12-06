import { Controller, Get, Post, Query, Req, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { GithubService } from './github.service';
import { WebhookEvent } from '../types/github.types';

@ApiTags('github')
@Controller('github')
@UseGuards(AuthGuard('github'))
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('pulls')
  @ApiOperation({ summary: 'Get pull requests for a repository' })
  @ApiQuery({ name: 'owner', required: true })
  @ApiQuery({ name: 'repo', required: true })
  async getPullRequests(
    @Req() req,
    @Query('owner') owner: string,
    @Query('repo') repo: string,
  ) {
    return this.githubService.getPullRequests(req.user.accessToken, owner, repo);
  }

  @Post('webhook')
  @ApiOperation({ summary: 'Handle GitHub webhooks' })
  async handleWebhook(@Body() webhookPayload: WebhookEvent) {
    return this.githubService.handleWebhookEvent(webhookPayload);
  }
}