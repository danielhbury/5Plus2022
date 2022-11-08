const notes = {
  'Software Architecture and Technology of Large Scale Systems': {
    generalNotes: [
      'Being an architect is deciding how to satisfy system level requirements',
    ],
    typesOfRequirements: [
      'performance',
      'scalability',
      'reliability',
      'security',
      'deployment',
      'technology stack',
    ],
    Performance: {
      GeneralNotes: [
        'given workload, given hardware how fast or responsive is it',
        'workload is dependent on backend data and request volume',
        'hardware is dependent on its kind and capacity',
      ],
      UnderstandingPerformance: {
        Problems: {
          notes: [
            'Bottlenecks, queuing',
          ],
          HowToSpot: [],
        },
        Measurement: {},
        Principles: {},
      },
      Latency: {
        CPU: {},
        Memory: {},
        Network: {},
        Disk: {},
      },
      Concurrency: {

      },
      Caching: {

      },
    },
  },
};

module.exports = notes;
