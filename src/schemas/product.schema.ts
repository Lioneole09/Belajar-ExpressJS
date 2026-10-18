import { z } from "zod";

export const CreateProductSchema = z.object({
    body: z.object ({
        title: z
            .string({error: "Title is strictly required."})
            .min(3, "Title must be a positive number"),
        price: z
            .number({error: "Price is reqired"})
            .positive("price must be a positive number"),
    })

    .strict(),
});

export type CreateProductSchema = z.infer<typeof CreateProductSchema>;