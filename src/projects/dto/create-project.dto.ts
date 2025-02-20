export class CreateProjectDto {
  name: string;
  description: string;
  started_at: Date | null;
  forecasted_end_at: Date | null;
  canceled_at: Date | null;
}
