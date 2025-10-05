"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const classeSocialData = [
  { name: 'Classe A', value: 50, color: '#a78bfa' },
  { name: 'Classe B', value: 50, color: '#60a5fa' },
];

const generoData = [
  { name: 'Feminino', value: 60, color: '#a78bfa' },
  { name: 'Masculino', value: 40, color: '#60a5fa' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, name } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="text-base font-bold"
    >
      <tspan x={x} dy="0">{name}</tspan>
      <tspan x={x} dy="1.2em" className="text-xl">{`${(percent * 100).toFixed(0)}%`}</tspan>
    </text>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLegend = (props: any) => {
  const { payload } = props;
  
  return (
    <ul className="flex justify-center gap-8 mt-4">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {payload?.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center gap-2">
          <span 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-base font-semibold">{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default function PublicoAlvo() {
  return (
    <div className="space-y-12 text-lg">
      {/* Descrição do Público */}
      <p className="text-center leading-relaxed">
        Empresários, jornalistas, formadores de opinião, celebridades, estilistas, produtores de moda, maquiadores, modelos, lojistas, estudantes de moda,
        empreendedores e o público interessado em moda, arte e cultura.
      </p>

      {/* Container dos Gráficos - Lado a lado em telas grandes */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mt-16">
        {/* Classe Social */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">CLASSE SOCIAL</h3>
          <p className="text-center text-gray-300 mb-8 text-base leading-relaxed px-4">
            Distribuição do público-alvo por classe social, destacando o perfil econômico dos participantes do evento.
          </p>
          
          <div className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={classeSocialData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                  label={CustomLabel}
                  labelLine={false}
                  animationBegin={0}
                  animationDuration={800}
                >
                  {classeSocialData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  itemStyle={{
                    color: '#fff'
                  }}
                  labelStyle={{
                    color: '#fff'
                  }}
                  formatter={(value: number | string) => `${value}%`}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  content={renderLegend}
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gênero */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">GÊNERO</h3>
          <p className="text-center text-gray-300 mb-8 text-base leading-relaxed px-4">
            Composição do público por gênero, refletindo a diversidade e o alcance do evento entre diferentes perfis.
          </p>
          
          <div className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={generoData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                  label={CustomLabel}
                  labelLine={false}
                  animationBegin={0}
                  animationDuration={800}
                >
                  {generoData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  itemStyle={{
                    color: '#fff'
                  }}
                  labelStyle={{
                    color: '#fff'
                  }}
                  formatter={(value: number | string) => `${value}%`}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  content={renderLegend}
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
