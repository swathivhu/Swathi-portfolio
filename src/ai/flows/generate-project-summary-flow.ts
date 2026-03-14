'use server';
/**
 * @fileOverview A Genkit flow for generating concise and engaging summaries for projects.
 *
 * - generateProjectSummary - A function that handles the project summary generation process.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the project to be summarized.'),
});
export type GenerateProjectSummaryInput = z.infer<
  typeof GenerateProjectSummaryInputSchema
>;

const GenerateProjectSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise and engaging summary of the project.'),
});
export type GenerateProjectSummaryOutput = z.infer<
  typeof GenerateProjectSummaryOutputSchema
>;

export async function generateProjectSummary(
  input: GenerateProjectSummaryInput
): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  prompt: `You are an expert content writer specializing in creating concise and engaging project summaries for developer portfolios.

Your task is to take the provided detailed project description and condense it into a short, impactful, and compelling summary (ideally 1-2 sentences) that highlights the project's essence and value. Focus on what the project does, key technologies, and its significance.

Do not include any introductory or concluding remarks outside of the summary itself.

Detailed Project Description:
{{{projectDescription}}}`,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
