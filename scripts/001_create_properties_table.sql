-- Create properties table
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  price decimal(12, 2) not null,
  location text not null,
  bedrooms integer not null,
  bathrooms integer not null,
  area decimal(10, 2) not null,
  property_type text not null check (property_type in ('casa', 'apartamento', 'terreno', 'comercial')),
  transaction_type text not null check (transaction_type in ('venda', 'aluguel')),
  images text[] default '{}',
  featured boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.properties enable row level security;

-- Public can view all properties
create policy "properties_select_all"
  on public.properties for select
  using (true);

-- Only authenticated users can insert properties
create policy "properties_insert_auth"
  on public.properties for insert
  with check (auth.uid() is not null);

-- Only authenticated users can update properties
create policy "properties_update_auth"
  on public.properties for update
  using (auth.uid() is not null);

-- Only authenticated users can delete properties
create policy "properties_delete_auth"
  on public.properties for delete
  using (auth.uid() is not null);

-- Create index for faster queries
create index if not exists properties_featured_idx on public.properties(featured);
create index if not exists properties_type_idx on public.properties(property_type);
create index if not exists properties_transaction_idx on public.properties(transaction_type);
