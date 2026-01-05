import React, { useState, useEffect } from 'react';
import '@/components/StatsCounter.css';

function StatsCounter() {
  const [stats, setStats] = useState({
    patients: 0,
    hospitals: 0,
    appointments: 0,
    efficiency: 0
  });

  const targetStats = {
    patients: 250000,
    hospitals: 500,
    appointments: 1000000,
    efficiency: 98.5
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = Object.keys(targetStats).map(stat => {
      let current = 0;
      const target = targetStats[stat];
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setStats(prev => ({
          ...prev,
          [stat]: stat === 'efficiency' ? parseFloat(current.toFixed(1)) : Math.floor(current)
        }));
      }, stepDuration);

      return timer;
    });

    return () => counters.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <section className="stats-counter-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">👨‍⚕️</div>
            <div className="stat-content">
              <h3 className="stat-number">{stats.patients.toLocaleString()}+</h3>
              <p className="stat-label">Patients Managed</p>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">🏥</div>
            <div className="stat-content">
              <h3 className="stat-number">{stats.hospitals.toLocaleString()}+</h3>
              <p className="stat-label">Healthcare Partners</p>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">📅</div>
            <div className="stat-content">
              <h3 className="stat-number">{stats.appointments.toLocaleString()}+</h3>
              <p className="stat-label">Appointments Scheduled</p>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <h3 className="stat-number">{stats.efficiency}%</h3>
              <p className="stat-label">Average Efficiency Gain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;