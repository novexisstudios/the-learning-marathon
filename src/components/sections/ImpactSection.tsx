import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: 'Manaswi Mishra',
    role: 'Student',
    initial: 'M',
    content:
      'I am delighted to have found Orison , a revolutionary establishment that has redefined the meaning of quality education. What truly sets Orison apart from traditional school systems is their unique approach to teaching. Instead of relying on rote memorization and standardized testing, they foster a love for learning by encouraging critical thinking, problem-solving, and creativity also placing a strong emphasis on research and development. I wholeheartedly recommend Orison to students seeking an exceptional educational experience. It is a place where students are not just taught but inspired, where the pursuit of knowledge is celebrated, and where character development is as vital as academic achievement.',
  },
  {
    name: 'Fanindra Saini',
    role: 'Student',
    initial: 'F',
    content:
      'Being a part of mbitious program by Orison is a life changing experience for me, I have learned many important lessons that can bring happiness and self satisfaction to our life. I had really enjoyed being with the Orison family, made many new friends. One of the important things that I learned is SMILE (Self motivated insightful learning), hence today also I SMILE everyday.',
  },
  {
    name: 'Jyoti Kumawat',
    role: 'Parent',
    initial: 'J',
    content:
      'Unlike today\'s schools where the rat race is the only trend, I was looking for a place where my son,Kush, can get a holistic development and learning not only just academically but spiritually, mentally and emotionally too. My search ended up with OLS and the best part of OLS is that not only Kush is excelling here ,infact we parents are also getting chance to excel ourself. The only place you will find where kids and parents learn together. Thank you so much Piyush Sir and the whole Orison Learning Studio for providing such a beautiful platform. 🙏💗',
  },
  {
    name: 'Rutuja Gaikwad',
    role: 'Student',
    initial: 'R',
    content:
      'Piyush Keshav is the best mentor I’ve ever had in my life. The unique teaching processes at orison are helpful in procuring knowledge and wisdom. The learning skills a student acquired at orison remains with him all throughout his life. Orison is all about pragmatic solutions to every student’s issues. Worth trying💯',
  },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="section-padding bg-bg-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[2px] bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Impact Stories</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-5">
              Words from the Marathon
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              See how the Learning Marathon is cultivating deep thinking and transforming students.
            </p>
          </motion.div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card p-8 bg-white flex flex-col relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-9 h-9 text-brand-secondary/35 absolute top-6 right-6" />

              <p className="text-slate-700 italic font-medium leading-relaxed flex-1 relative z-10">
                "{story.content}"
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center text-brand-primary font-black text-base shrink-0">
                  {story.initial}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">{story.name}</h4>
                  <p className="text-brand-primary text-xs font-bold uppercase tracking-wide mt-0.5">{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
