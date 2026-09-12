import React from 'react';
import { ArrowRight, Lightbulb, Box, Map, CodeXml, Gamepad2, Trophy } from 'lucide-react';

const ScheduleSection = () => {
  return (
    <section className="schedule-section">
      <div className="schedule-header-top">
        <div className="section-label-group light-text">
          <span className="section-number">04</span>
          <div className="section-line"></div>
          <span className="section-label">EVENT TIMELINE</span>
        </div>
        
        <div className="schedule-header-right">
          <div className="events-tags light-text">
            <span>TWO DAYS</span>
            <span>×</span>
            <span>ENDLESS OPPORTUNITIES</span>
          </div>
          <button className="view-schedule-btn">
            View Full Schedule <ArrowRight size={16} color="#ff5722" />
          </button>
        </div>
      </div>

      <div className="schedule-main">
        <div className="schedule-left">
          <h2 className="schedule-title">
            The Journey<br/>
            <span className="title-orange">Ahead.</span>
          </h2>
          
          <p className="schedule-desc">
            Two days. Multiple experiences. A<br/>
            community driven by ideas, innovation<br/>
            and play. Here's what's lined up at<br/>
            IGNITE '26.
          </p>
          
          <div className="skewed-text-container">
            <div className="skewed-text">
              SAME CAMPUS.<br/>
              BIGGER TOMORROW.
            </div>
            <div className="skewed-line"></div>
          </div>
        </div>
        
        <div className="schedule-right">
          <div className="timeline-vertical-line"></div>
          
          {/* Day 1 - 15 SEP */}
          <div className="timeline-row">
            <div className="timeline-date">
              <span className="date-num">15</span>
              <span className="date-month">SEP</span>
            </div>
            
            <div className="timeline-node">
              <div className="node-dot"></div>
            </div>
            
            <div className="timeline-cards">
              <div className="schedule-card">
                <div className="s-card-left">
                  <Lightbulb color="#ff5722" size={24} className="s-card-icon" />
                  <div className="s-card-time">09:00 AM</div>
                  <h4 className="s-card-title">SIH Finals</h4>
                  <p className="s-card-desc">Innovative minds.<br/>Real world impact.</p>
                </div>
                <div className="s-card-right">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80" alt="SIH Finals" />
                </div>
              </div>
              
              <div className="schedule-card">
                <div className="s-card-left">
                  <Box color="#ff5722" size={24} className="s-card-icon" />
                  <div className="s-card-time">11:30 AM</div>
                  <h4 className="s-card-title">Project<br/>Exhibition</h4>
                  <p className="s-card-desc">Ideas on display.<br/>Solutions for tomorrow.</p>
                </div>
                <div className="s-card-right">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80" alt="Exhibition" />
                </div>
              </div>
              
              <div className="schedule-card">
                <div className="s-card-left">
                  <Map color="#ff5722" size={24} className="s-card-icon" />
                  <div className="s-card-time">02:00 PM</div>
                  <h4 className="s-card-title">Technical<br/>Treasure Hunt</h4>
                  <p className="s-card-desc">Decode. Explore.<br/>Conquer.</p>
                </div>
                <div className="s-card-right">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80" alt="Treasure Hunt" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Day 2 - 16 SEP */}
          <div className="timeline-row">
            <div className="timeline-date">
              <span className="date-num">16</span>
              <span className="date-month">SEP</span>
            </div>
            
            <div className="timeline-node">
              <div className="node-dot"></div>
            </div>
            
            <div className="timeline-cards">
              <div className="schedule-card">
                <div className="s-card-left">
                  <CodeXml color="#ff5722" size={24} className="s-card-icon" />
                  <div className="s-card-time">09:00 AM</div>
                  <h4 className="s-card-title">GFG Coding<br/>Contest</h4>
                  <p className="s-card-desc">Code. Compete.<br/>Grow.</p>
                </div>
                <div className="s-card-right">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80" alt="Coding" />
                </div>
              </div>
              
              <div className="schedule-card">
                <div className="s-card-left">
                  <Gamepad2 color="#ff5722" size={24} className="s-card-icon" />
                  <div className="s-card-time">12:00 PM</div>
                  <h4 className="s-card-title">BGMI<br/>Tournament</h4>
                  <p className="s-card-desc">Strategy. Skill.<br/>Victory.</p>
                </div>
                <div className="s-card-right">
                  <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80" alt="Gaming" />
                </div>
              </div>
              
              <div className="schedule-card">
                <div className="s-card-left">
                  <Trophy color="#ff5722" size={24} className="s-card-icon" />
                  <div className="s-card-time">04:00 PM</div>
                  <h4 className="s-card-title">Prize Distribution<br/>Ceremony</h4>
                  <p className="s-card-desc">Celebrating talent.<br/>Inspiring what's next.</p>
                </div>
                <div className="s-card-right">
                  <img src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=500&q=80" alt="Trophy" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="schedule-footer">
        <div className="s-footer-left">
          <span>IGNITE '26</span>
          <div className="s-footer-line"></div>
          <span>IDEAS × PEOPLE × IMPACT</span>
        </div>
        <div className="s-footer-right">
          <span>IDEAS</span>
          <span>PEOPLE</span>
          <span>IMPACT</span>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
