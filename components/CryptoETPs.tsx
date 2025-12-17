import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, Cell } from 'recharts';

const data1 = [
  { name: 'A', value: 40 }, { name: 'B', value: 30 }, { name: 'C', value: 60 },
  { name: 'D', value: 45 }, { name: 'E', value: 70 }, { name: 'F', value: 55 },
  { name: 'G', value: 80 },
];

const data2 = [
  { name: 'A', value: 20 }, { name: 'B', value: 40 }, { name: 'C', value: 30 },
  { name: 'D', value: 60 }, { name: 'E', value: 45 }, { name: 'F', value: 70 },
  { name: 'G', value: 50 },
];

export const CryptoETPs: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">Crypto ETPs</h2>
          <p className="text-xl text-gray-500 font-light">European Investors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-brand-dark border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[420px] group hover:border-white/20 transition-all">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">CoinShares Physical ETPs</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Simple access to digital assets. Our crypto ETPs allow you to invest in cryptocurrencies via your bank or broker - just as you would with traditional stocks and ETFs.
              </p>
            </div>
            <div className="h-24 w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data1}>
                  <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                    {data1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="rgba(255,255,255,0.2)" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-dark border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-[420px] group hover:border-white/20 transition-all">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">CoinShares XBT Provider</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Simple access to digital assets. Our crypto ETPs allow you to invest in cryptocurrencies via your bank or broker - just as you would with traditional stocks and ETFs.
              </p>
            </div>
            <div className="h-24 w-full mt-6">
               <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data2}>
                  <Line type="monotone" dataKey="value" stroke="rgba(255,255,255,0.4)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card 3 (Highlight) */}
          <div className="bg-brand-lime rounded-2xl p-8 flex flex-col justify-between h-[420px] relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-brand-black mb-4">CoinShares Valkyrie Funds</h3>
              <p className="text-brand-black/80 text-sm leading-relaxed font-medium">
                Gain exposure to bitcoin and the emerging digital asset economy through Exchange Traded Funds (ETFs). Available to US investors only.
              </p>
            </div>
            <div className="h-24 w-full mt-6 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data1}>
                  <Bar dataKey="value" fill="#050505" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <button className="absolute bottom-6 right-6 bg-white w-10 h-10 rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform z-20">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};