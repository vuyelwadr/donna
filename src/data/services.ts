export interface ServiceDuration {
  time: string;
  price: number;
}

export interface Service {
  name: string;
  durations: ServiceDuration[];
  description: string;
  benefits: string[];
}

export interface ServiceCategory {
  category: string;
  items: Service[];
}

export const services: ServiceCategory[] = [
  {
    category: "MASSAGE THERAPY",
    items: [
      {
        name: "Swedish Massage",
        durations: [
          { time: "45 mins", price: 500 },
          { time: "60 mins", price: 550 }
        ],
        description: "Gentle, flowing strokes to promote total body relaxation and wellness.",
        benefits: ["Stress relief", "Better sleep", "Improved circulation", "Mental clarity"]
      },
      {
        name: "Aromatherapy Massage",
        durations: [
          { time: "45 mins", price: 550 },
          { time: "60 mins", price: 600 }
        ],
        description: "Therapeutic massage enhanced with essential oils for mind-body balance.",
        benefits: ["Emotional balance", "Enhanced relaxation", "Natural healing", "Aromatherapy benefits"]
      },
      {
        name: "Deep Tissue Massage",
        durations: [
          { time: "45 mins", price: 600 },
          { time: "60 mins", price: 650 }
        ],
        description: "Targeted deep pressure massage focusing on chronic muscle tension and knots.",
        benefits: ["Pain relief", "Improved mobility", "Stress reduction", "Better posture"]
      },
      {
        name: "Back & Neck Massage",
        durations: [
          { time: "45 mins", price: 400 }
        ],
        description: "Focused treatment targeting tension in the back, shoulders, and neck area.",
        benefits: ["Tension relief", "Improved posture", "Stress reduction", "Headache relief"]
      }
    ]
  },
  {
    category: "BODY TREATMENTS",
    items: [
      {
        name: "Body Scrub",
        durations: [
          { time: "40 mins", price: 500 }
        ],
        description: "Exfoliating treatment to remove dead skin cells and promote skin renewal.",
        benefits: ["Skin renewal", "Improved circulation", "Relaxation", "Smoother skin"]
      },
      {
        name: "Body Scrub + Full Body Massage",
        durations: [
          { time: "60 mins", price: 650 }
        ],
        description: "Complete body treatment combining exfoliation with relaxing massage.",
        benefits: ["Deep relaxation", "Full body renewal", "Enhanced circulation", "Ultimate pampering"]
      }
    ]
  }
];