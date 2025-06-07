import { z } from 'zod';

export const TemplateConfigSchema = z.object({
  name: z.string().min(1, 'Template name is required'),
  description: z.string(),
  version: z.string().regex(/^v\d+\.\d+\.\d+$/),
  supportedRoles: z.array(z.enum(['junior', 'lead'])),
  requiredEnv: z.array(z.string()),
});

export type TemplateConfgSchema = z.infer<typeof TemplateConfigSchema>;
