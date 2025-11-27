-- Add region column to properties table
ALTER TABLE public.properties 
ADD COLUMN IF NOT EXISTS region text CHECK (region IN ('sul', 'leste', 'oeste', 'norte', 'abc'));

-- Create index for region filtering
CREATE INDEX IF NOT EXISTS properties_region_idx ON public.properties(region);

-- Update existing properties with sample regions
UPDATE public.properties 
SET region = CASE 
  WHEN location ILIKE '%sul%' THEN 'sul'
  WHEN location ILIKE '%leste%' THEN 'leste'
  WHEN location ILIKE '%oeste%' THEN 'oeste'
  WHEN location ILIKE '%norte%' THEN 'norte'
  WHEN location ILIKE '%abc%' OR location ILIKE '%mauá%' OR location ILIKE '%santo andré%' OR location ILIKE '%são bernardo%' OR location ILIKE '%diadema%' THEN 'abc'
  ELSE 'sul'
END
WHERE region IS NULL;
